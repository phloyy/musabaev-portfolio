create table projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  category text not null,
  year integer not null,
  image_url text,
  description text,
  sort_order integer default 0,
  is_visible boolean default true,
  created_at timestamptz default now()
);

create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  service text,
  description text,
  contact text not null,
  timeline text,
  created_at timestamptz default now()
);

-- Enable RLS
alter table projects enable row level security;
alter table contact_submissions enable row level security;

-- Public read for projects
create policy "Projects are viewable by everyone" on projects for select using (is_visible = true);

-- Public insert for contact
create policy "Anyone can submit contact" on contact_submissions for insert with check (true);
