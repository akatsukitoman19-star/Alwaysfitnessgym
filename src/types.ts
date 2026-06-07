export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  intensity: 'Beginner' | 'Medium' | 'High' | 'All Levels';
  iconName: string;
  image: string;
}

export interface ChoicePoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  tagline: string;
  description: string;
  durationWeeks: number;
  frequency: string;
  focus: string[];
  intensity: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Equipment' | 'Group Classes' | 'Personal Training';
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  transformation: string;
  quote: string;
  avatar: string;
  beforeImg?: string;
  afterImg?: string;
}
