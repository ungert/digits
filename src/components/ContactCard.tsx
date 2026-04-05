'use client';

import Link from 'next/link';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from '@/components/AddNoteForm';

type ContactNote = {
  id: number;
  note: string;
  createdAt: Date | string;
  contactId: number;
  owner: string;
};

type ContactCardProps = {
  contact: Contact & { id: number };
  notes: ContactNote[];
};

/* Renders a single contact card on the List Contacts page. */
const ContactCard = ({ contact, notes }: ContactCardProps) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} alt={`${contact.firstName} ${contact.lastName}`} />
      <Card.Title className="pt-2 mb-0">
        {contact.firstName}
        {' '}
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle className="text-muted">
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ListGroup>
    <Card.Body>
      <AddNoteForm contactId={contact.id} />
    </Card.Body>
    <Card.Footer>
      <Link href={`/edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;
