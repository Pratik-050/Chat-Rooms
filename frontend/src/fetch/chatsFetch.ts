import { CHATS_URL } from "@/lib/apiEndPoints";

export async function fetchChats(groupId: string) {
  try {
    const res = await fetch(`${CHATS_URL}/${groupId}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch chats");
    }
    const response = await res.json();
    if (response?.data) {
      return response?.data;
    }
    return [];
  } catch (error) {
    throw new Error("Failed to fetch chats: " + error);
  }
}
