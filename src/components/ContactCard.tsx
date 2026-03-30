'use client';

import { Card, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

type ContactCardProps = {
  contact: Contact;
};

/* Renders a single contact card on the List Contacts page. */
const ContactCard = ({ contact }: ContactCardProps) => (
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
  </Card>
);

export default ContactCard;
