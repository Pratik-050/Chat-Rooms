import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroups(token: string) {
  try {
    const res = await fetch(CHAT_GROUP_URL, {
      // fetch is used cause there is no revalidation available in axios
      headers: {
        Authorization: token,
      },
      next: {
        revalidate: 60 * 60, // Revalidate every 60 seconds
        tags: ["dashboard"], // Tag for cache invalidation
      },
    });
    if (!res.ok) {
      throw new Error("No chat groups found");
    }
    const response = await res.json();
    return response?.data || [];
  } catch (error) {
    throw new Error("Failed to fetch chat groups: " + error);
  }
}

export async function fetchChatGroup(id: string) {
  try {
    const res = await fetch(`${CHAT_GROUP_URL}/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    if (response?.data) {
      return response?.data;
    }
    return null;
  } catch (error) {
    throw new Error("Failed to fetch chat group: " + error);
  }
}
