'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addNote } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddNoteSchema } from '@/lib/validationSchemas';

type AddNoteFormData = {
  note: string;
  contactId: number;
  owner: string;
};

type AddNoteFormProps = {
  contactId: number;
};

const AddNoteForm = ({ contactId }: AddNoteFormProps) => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AddNoteFormData>({
    resolver: yupResolver(AddNoteSchema),
    defaultValues: {
      note: '',
      contactId,
      owner: '',
    },
  });

  useEffect(() => {
    setValue('contactId', contactId);
    if (currentUser) {
      setValue('owner', currentUser);
    }
  }, [contactId, currentUser, setValue]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  const submit = async (data: AddNoteFormData) => {
    await addNote(data);
    swal('Success', 'Your note has been added', 'success', {
      timer: 2000,
    });
  };

  const handleReset = () => {
    reset({
      note: '',
      contactId,
      owner: currentUser,
    });
  };

  return (
    <Container className="px-0">
      <Card className="border-0">
        <Card.Header className="text-center">Add Timestamped Note</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <input type="hidden" {...register('contactId', { valueAsNumber: true })} />
            <input type="hidden" {...register('owner')} />
            <Form.Group>
              <Form.Label>Note</Form.Label>
              <input
                type="text"
                {...register('note')}
                className={`form-control ${errors.note ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.note?.message}</div>
            </Form.Group>
            <Form.Group className="form-group">
              <Row className="pt-3">
                <Col>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Col>
                <Col>
                  <Button type="button" onClick={handleReset} variant="warning" className="float-right">
                    Reset
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddNoteForm;
