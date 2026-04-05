'use client';

import { ListGroup } from 'react-bootstrap';

type NoteItemProps = {
  note: {
    id: number;
    note: string;
    createdAt: Date | string;
    contactId: number;
    owner: string;
  };
};

/* Renders a single note for a contact. */
const NoteItem = ({ note }: NoteItemProps) => (
  <ListGroup.Item>
    <p className="fw-lighter mb-2">{new Date(note.createdAt).toLocaleDateString('en-US')}</p>
    <p className="mb-0">{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
