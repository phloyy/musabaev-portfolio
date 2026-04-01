import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { projectsData } from '../data/projects';
import type { Project } from '../types/project';

// We map static data to allow compatibility in UI
export const fallbackProjects = projectsData;

export function useProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      if (!supabase) {
        setProjects(fallbackProjects);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('is_visible', true)
          .order('sort_order', { ascending: true });

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setProjects(data);
        } else {
          // If table is empty, use fallback for demo purposes
          setProjects(fallbackProjects);
        }
      } catch (err: any) {
        console.error('Error fetching projects:', err);
        setError(err);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
