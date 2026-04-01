import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Project } from '../types/project';

export default function Admin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  const isConfigured = !!supabase;

  // Form state
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    slug: '',
    category: '',
    year: new Date().getFullYear(),
    image_url: '',
    description: '',
    sort_order: 0,
    is_visible: true,
  });

  useEffect(() => {
    if (!isConfigured) return;
    fetchProjects();
  }, [isConfigured]);

  async function fetchProjects() {
    setLoading(true);
    const { data, error } = await supabase!.from('projects').select('*').order('sort_order', { ascending: true });
    if (error) console.error('Fetch error:', error);
    else setProjects(data || []);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;

    if (editingId) {
      const { error } = await supabase.from('projects').update(formData).eq('id', editingId);
      if (!error) {
        setEditingId(null);
        fetchProjects();
      }
    } else {
      const { error } = await supabase.from('projects').insert([formData]);
      if (!error) fetchProjects();
    }
    setFormData({ title: '', slug: '', category: '', year: new Date().getFullYear(), image_url: '', description: '', sort_order: 0, is_visible: true });
  }

  async function handleDelete(id: string) {
    if (!supabase || !confirm('Delete project?')) return;
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  }

  async function toggleVisibility(p: Project) {
    if (!supabase) return;
    await supabase.from('projects').update({ is_visible: !p.is_visible }).eq('id', p.id);
    fetchProjects();
  }

  function handleEdit(p: Project) {
    setEditingId(p.id);
    setFormData(p);
  }

  if (!isConfigured) {
    return (
      <div style={{ padding: '80px', fontFamily: 'var(--font-mono)', color: 'var(--clr-light)', minHeight: '100vh', backgroundColor: 'var(--clr-dark)' }}>
        <h2>Supabase not configured.</h2>
        <p>Please define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '80px 40px', backgroundColor: 'var(--clr-dark)', color: 'var(--clr-light)', minHeight: '100vh', fontFamily: 'var(--font-mono)' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginBottom: '2rem' }}>Projects Admin</h1>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
          <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>{editingId ? 'Edit Project' : 'Add Project'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input placeholder="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} required />
              <input placeholder="Slug" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} required />
              <input placeholder="Category" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} required />
              <input placeholder="Year" type="number" value={formData.year} onChange={e => setFormData({ ...formData, year: Number(e.target.value) })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} required />
              <input placeholder="Image URL" value={formData.image_url} onChange={e => setFormData({ ...formData, image_url: e.target.value })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
              <textarea placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', minHeight: '100px' }} />
              <input placeholder="Sort Order" type="number" value={formData.sort_order} onChange={e => setFormData({ ...formData, sort_order: Number(e.target.value) })} style={{ padding: '10px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
              
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input type="checkbox" checked={formData.is_visible} onChange={e => setFormData({ ...formData, is_visible: e.target.checked })} id="visible" />
                <label htmlFor="visible">Visible</label>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                <button type="submit" style={{ flex: 1, padding: '12px', background: 'var(--clr-accent)', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  {editingId ? 'Update' : 'Create'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => { setEditingId(null); setFormData({ title: '', slug: '', category: '', year: 2025, image_url: '', description: '', sort_order: 0, is_visible: true }); }} style={{ flex: 1, padding: '12px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div style={{ flex: '2 1 500px' }}>
          {loading ? <p>Loading projects...</p> : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '1rem 0.5rem' }}>Title</th>
                    <th>Category</th>
                    <th>Year</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>{p.title}</td>
                      <td>{p.category}</td>
                      <td>{p.year}</td>
                      <td>
                        <button onClick={() => toggleVisibility(p)} style={{ background: 'transparent', border: 'none', color: p.is_visible ? '#4ade80' : 'rgba(255,255,255,0.4)', cursor: 'pointer', fontFamily: 'inherit' }}>
                          {p.is_visible ? 'Visible' : 'Hidden'}
                        </button>
                      </td>
                      <td>
                        <button onClick={() => handleEdit(p)} style={{ background: 'transparent', border: 'none', color: 'var(--clr-accent)', cursor: 'pointer', marginRight: '1rem' }}>Edit</button>
                        <button onClick={() => handleDelete(p.id)} style={{ background: 'transparent', border: 'none', color: 'red', cursor: 'pointer' }}>Del</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
