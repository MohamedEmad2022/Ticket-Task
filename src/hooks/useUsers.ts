
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { z } from 'zod';
import { formSchema } from '../validationSchema/validationSchema';


export type User = z.infer<typeof formSchema> & { id: number };

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('http://localhost:3001/users');
  return data;
};

const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const { data } = await axios.post('http://localhost:3001/users', user);
  return data;
};

const updateUser = async (user: User): Promise<User> => {
  const { data } = await axios.put(`http://localhost:3001/users/${user.id}`, user);
  return data;
};

const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:3001/users/${id}`);
};

export const useUsers = () => {
  const queryClient = useQueryClient();

  const usersQuery = useQuery('users', fetchUsers);

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => queryClient.invalidateQueries('users'),
  });

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => queryClient.invalidateQueries('users'),
  });

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => queryClient.invalidateQueries('users'),
  });

  return { usersQuery, addUserMutation, updateUserMutation, deleteUserMutation };
};
