type MemberEntity = {
  id: number;
  name: string;
  image: string;
  completed: boolean;
};

type CardEntity = {
  id: number;
  name: string;
  image: string;
  completed: boolean;
  organisation?: string;
  members?: MemberEntity[];
  labels?: string[];
  created_at: string;
};
