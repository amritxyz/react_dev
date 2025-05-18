import React, { useState } from 'react';
import { createCategory } from '../api/api';
import { toast } from 'react-toastify';

const CreateCategory = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory({ name });
      toast.success('Category created');
    } catch (err) {
      toast.error('Failed to create category');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Category Name" />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateCategory;
