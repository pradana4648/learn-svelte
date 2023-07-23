interface NoteData {
  readonly id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly updateAt: Date;
  readonly createdAt: Date;
}

export class Note implements NoteData {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  updateAt: Date;
  createdAt: Date;

  constructor(name: string, description: string) {
    this.id = name + "-" + name.length;
    this.name = name;
    this.description = description;
    this.updateAt = new Date();
    this.createdAt = new Date();
  }
}

export const notes: Note[] = [];

// const notes: Note[] = [];

// export function getNotes() {
//   return notes;
// }

// export function addNote(note: Note) {
//   notes.push(note);
// }

// export function editNote(note: Note) {
//   notes.map((nt) =>
//     note.id === nt.id
//       ? {
//           ...nt,
//           name: note.name,
//           description: note.description,
//           updateAt: note.updateAt,
//         }
//       : nt
//   );
// }

// export function deleteNoteById(note: Note) {
//   const index = notes.findIndex((nt) => nt.id === note.id);
//   notes.splice(index, 1);
// }
