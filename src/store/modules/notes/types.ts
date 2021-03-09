export interface INote {
  id: number | null;
  title: string;
  description: string;
}

export interface IInitialStateNote {
  currentNote: INote;
  notes: INote[];
}
