import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUsers, User } from '../hooks/useUsers';
import { z } from 'zod';
import { formSchema } from '../validationSchema/validationSchema';
import Modal from './modal';

type FormData = z.infer<typeof formSchema>;

const UserForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { usersQuery, addUserMutation, updateUserMutation, deleteUserMutation } = useUsers();

  const onSubmit = (data: FormData) => {
    if (editingUser) {
      updateUserMutation.mutate({ id: editingUser.id, ...data });
      setEditingUser(null);
    } else {
      addUserMutation.mutate(data);
    }
    reset();
    setIsModalOpen(false); 
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    reset(user);
    setIsModalOpen(true); 
  };

  const handleDelete = (id: number) => {
    deleteUserMutation.mutate(id);
  };

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={() => {
          setEditingUser(null);
          setIsModalOpen(true);
        }}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add User
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              {...register('name')}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              {...register('email')}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              {editingUser ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </Modal>

      <ul className="space-y-4">
  {usersQuery.data?.map((user) => (
    <li
      key={user.id}
      className="p-4 flex items-center justify-between"
    >
      
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-gray-500">{user.email}</p>
      </div>

      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleEdit(user)}
          className="text-blue-500 hover:text-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232a3 3 0 014.536 4.536L8.036 21H4.5a.5.5 0 01-.5-.5v-3.536l11.232-11.232z"
            />
          </svg>
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="text-red-500 hover:text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default UserForm;
