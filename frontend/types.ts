type ChatGroupType = {
  id: string;
  title: string;
  passcode: string;
  created_at: String;
  user_id: number;
};

type GroupChatUserType = {
  id: number;
  name: string;
  group_id: string;
  created_at: string;
  isOnline?: boolean;
};

type MessageType = {
  id: string;
  group_id: string;
  name: string;
  message: string;
  created_at: string;
};
