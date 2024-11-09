
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

interface Message {
  id?: number;
  sender: string;
  time: string;
  text: string;
}

const fetchMessages = async (): Promise<Message[]> => {
  const { data } = await axios.get('http://localhost:3001/messages');
  return data;
};


const postMessage = async (newMessage: Message): Promise<Message> => {
  const { data } = await axios.post('http://localhost:3001/messages', newMessage);
  return data;
};

export const useMessages = () => {

  const queryClient = useQueryClient();

  const messagesQuery = useQuery<Message[]>('messages', fetchMessages);

  const sendMessageMutation = useMutation(postMessage, {
    onSuccess: () => {
      
      queryClient.invalidateQueries('messages');
    },
  });

  return { ...messagesQuery, sendMessage: sendMessageMutation.mutate };
};