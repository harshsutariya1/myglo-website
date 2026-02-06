-- Run this query in your Supabase SQL Editor to update the waitlist table

ALTER TABLE public.waitlist
ADD COLUMN IF NOT EXISTS name text,
ADD COLUMN IF NOT EXISTS city text,
ADD COLUMN IF NOT EXISTS salon_name text,
ADD COLUMN IF NOT EXISTS mobile text;

-- Optional: Add a comment to the columns for documentation
COMMENT ON COLUMN public.waitlist.name IS 'Full name of the person joining the waitlist';
COMMENT ON COLUMN public.waitlist.city IS 'City where the salon/user is located';
COMMENT ON COLUMN public.waitlist.salon_name IS 'Name of the salon or business';
COMMENT ON COLUMN public.waitlist.mobile IS 'Optional mobile contact number';

-- Create waitlist table
CREATE TABLE public.waitlist (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  created_at_aest timestamp with time zone NOT NULL DEFAULT timezone('Australia/Brisbane'::text, now()),
  created_at_ist timestamp with time zone NOT NULL DEFAULT timezone('Asia/Kolkata'::text, now()),
  name text,
  city text,
  salon_name text,
  mobile text,
  CONSTRAINT waitlist_pkey PRIMARY KEY (id)
);