export interface UpdateCommentRequest {
  content: string;
  commentId: number;
  rating: number;
}

export interface UpdateCommentResponse {
  message: string;
  ratingApplied: boolean;
  comment: {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
