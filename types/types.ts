export interface RoadmapItem {
    id: number;
    title: string;
    description: string;
    user: string;
    votes: number;
    status: "PENDING" | 'REJECTED' | "ACCEPTED" | "REJECTED" | "IN_PROGRESS" | "COMPLETED";
    type: "FEATURE" | "COMPLAINT" | "SUGGESTION"
  }
  