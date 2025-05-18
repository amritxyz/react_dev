import React, { useState, useEffect } from 'react';
import { createCourse, getAllCategories } from '../api/api';
import { toast } from 'react-toastify';

const CreateCourse = () => {
  const [form, setForm] = useState({ title: '', description: '', category: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(res => setCategories(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(form);
      toast.success('Course created');
    } catch (err) {
      toast.error('Failed to create course');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Select Category</option>
        {categories.map(cat => <option key={cat._id} value={cat.name}>{cat.name}</option>)}
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateCourse;
