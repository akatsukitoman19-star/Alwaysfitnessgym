import { Service, ChoicePoint, TrainingProgram, GalleryItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'hiit',
    title: 'HIIT Exercise Classes',
    description: 'High-Intensity Interval Training designed to spike metabolism, torch body fat, and elevate endurance in a dynamic 45-minute format.',
    benefits: ['Burns up to 800+ calories', 'EPOC effect burns fat after workout', 'Improves cardiovascular performance'],
    duration: '45 Mins',
    intensity: 'High',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'Forging elite physical capability through functional movements, constantly varied at high intensity. Olympic lifting, gymnastics, and metabolic conditioning combined.',
    benefits: ['Builds unparalleled functional strength', 'Develops mental toughness', 'Comprehensive full-body conditioning'],
    duration: '60 Mins',
    intensity: 'High',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'zumba',
    title: 'Zumba & Aerobics',
    description: 'Fuse high-energy Latin and international rhythms with cardiovascular exercises to create a sweat-dripping dance party you will love.',
    benefits: ['High calorie burn in a high-vibe group setup', 'Improves coordination and rhythm', 'Incredibly fun and stress-relieving'],
    duration: '50 Mins',
    intensity: 'Medium',
    iconName: 'Music',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'weight-training',
    title: 'Weight Training',
    description: 'Master hypertrophy and physical density. Utilize our elite state-of-the-art power racks, premium free weights, and plate-loaded machines.',
    benefits: ['Accelerates muscle tissue growth', 'Strengthens bone density', 'Increases foundational strength'],
    duration: '60 Mins',
    intensity: 'Medium',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'Receive 1-on-1 private attention from Rajasthan’s elite trainers. Formulate precise custom lifting programs, biomechanical analysis, and targeted milestone tracking.',
    benefits: ['100% personalized coaching and pacing', 'Rapid and safe achievement of milestones', 'Advanced form and posture correction'],
    duration: 'Custom',
    intensity: 'All Levels',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'yoga',
    title: 'Yoga Classes',
    description: 'Regain structural flexibility, restore spiritual mindfulness, and focus on spinal decompression. Blends Flow Vinyasa with restorative deep-breathing holds.',
    benefits: ['Reduces physical/mental stress hormones', 'Increases deep core stability and posture', 'Increases muscular range of motion'],
    duration: '60 Mins',
    intensity: 'Beginner',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nutrition',
    title: 'Nutrition Consulting',
    description: 'Maximize your efforts inside the gym with professional dietary architecture. Personalized calorie calculations, macro ratios, grocery lists, and monthly body composition reviews.',
    benefits: ['Eliminates dietary guesswork', 'Sustainable habit-based meal planning', 'Accelerates fat loss and muscle building'],
    duration: '30 Mins (Weekly)',
    intensity: 'All Levels',
    iconName: 'Apple',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cycling',
    title: 'Indoor Cycling (Spin Class)',
    description: 'Hop onto high-tech resistance bikes in a customized, sound-isolated stadium with neon lighting and roaring soundtracks. Speed intervals and hill climbs combined.',
    benefits: ['Extreme cardiovascular stamina building', 'Low-impact high-calorie execution', 'Tones quads, hamstrings, and calves'],
    duration: '45 Mins',
    intensity: 'High',
    iconName: 'Bike',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'spa',
    title: 'Spa & Recovery Services',
    description: 'Enter our high-end luxury decompression thermal zone. Features professional muscle decompression, dry Finnish sauna sessions, and localized cryotherapy recovery.',
    benefits: ['Slashes lactic acid buildup rapidly', 'Prevents physical injury and overtraining', 'Decompresses nervous system strain'],
    duration: 'Custom',
    intensity: 'Beginner',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop'
  }
];

export const WHY_CHOOSE_US: ChoicePoint[] = [
  {
    id: 'trainers',
    title: 'Certified Expert Trainers',
    description: ' Rajasthan’s elite squad of certified strength coaches and nutritional architects dedicated to holding you accountable.',
    iconName: 'Award'
  },
  {
    id: 'equipment',
    title: 'World-Class Modern Equipment',
    description: 'Equipped with heavy-duty biometric resistance machines, massive free-weight arrays, and premium functional racks.',
    iconName: 'Cpu'
  },
  {
    id: 'programs',
    title: 'Personalized Programs',
    description: 'We do not believe in cookie-cutter sheets. Every single workout matrix is custom-calibrated for your anatomical build.',
    iconName: 'Target'
  },
  {
    id: 'nutrition',
    title: 'Macro-Nutrient Guidance',
    description: 'Complete nutritional counseling paired with continuous body fat and skeletal muscle mass tracking.',
    iconName: 'Heart'
  },
  {
    id: 'environment',
    title: 'Ultra-Clean Premium Environment',
    description: 'An expansive luxury workout facility cleaned continuously, complete with high-tech air filtration and sound design.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'membership',
    title: 'Flexible Membership Plans',
    description: 'No hidden joining fees. Select transparent monthly, quarterly, or annual passes that perfectly accommodate your routine.',
    iconName: 'CalendarRange'
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'fat-loss',
    title: 'Alpha Fat-Loss Architecture',
    tagline: 'Sculpt & Decompress',
    description: 'A scientifically backed, metcon-heavy routine targeting stubborn stored fat reserves while retaining lean skeletal mass. Includes weekly bio-impedance reports.',
    durationWeeks: 12,
    frequency: '5 Days / Week',
    focus: ['Metabolic Conditioning', 'Caloric Deficit Adjustments', 'Active Recovery Systems'],
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'muscle-gain',
    title: 'Apex Hypertrophy Protocol',
    tagline: 'Build Hard Aesthetic Tissue',
    description: 'Focused purely on progressive overload, mechanically high mechanical tension, and volume adjustments to force dry muscle tissue development.',
    durationWeeks: 16,
    frequency: '5-6 Days / Week',
    focus: ['Push-Pull-Legs Split', 'Myofibrillar Hypertrophy', 'Positive Macro Surplus Planning'],
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'strength-training',
    title: 'Elite Power & Strength Matrix',
    tagline: 'Master the Big 3 Compounds',
    description: 'Master the physics of Squats, Bench Press, and Deadlifts. Designed to prime neurological adaptation, optimize leverages, and shatter personal records.',
    durationWeeks: 10,
    frequency: '4 Days / Week',
    focus: ['Neurological Core Adaptation', 'Compound Leverage Optimization', 'Central Nervous System Regulation'],
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'functional-fitness',
    title: 'Titan Functional Athleticism',
    tagline: 'Velocity, Agility, and Control',
    description: 'Combines dynamic kettlebell sequences, core stabilization, and explosive plyometrics to cultivate an aesthetic, functional athlete’s frame.',
    durationWeeks: 8,
    frequency: '4 Days / Week',
    focus: ['Multi-Planar Movements', 'Anatomical Balance Enhancement', 'Explosive Power Drills'],
    intensity: 'Medium to High',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'beginner-program',
    title: 'Foundational Iron Launchpad',
    tagline: 'Zero to Hero Adaptation',
    description: 'The ultimate introductory onboarding program for gym newcomers. Demystifies gym culture, builds proper compound lift mechanics, and prevents initial soreness fatigue.',
    durationWeeks: 6,
    frequency: '3 Days / Week',
    focus: ['Form & Motor Pattern Control', 'Lifting Confidence Building', 'Rest & Nutrition Onboarding'],
    intensity: 'Mild to Medium',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'advanced-athlete',
    title: 'Apex Savage Conditioning',
    tagline: 'For Elite Competitors & Builders',
    description: 'Strict, advanced periodization plans utilizing daily undulations, eccentric overload, and elite metabolic routines to secure that absolute peak stage-ready physique.',
    durationWeeks: 12,
    frequency: '6 Days / Week',
    focus: ['Undulating Periodization', 'Lactic Acid Threshold Spike', 'Elite Performance Biometrics'],
    intensity: 'Savage Peak',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Strength Floor',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    tag: 'Featuring premium high-tensile barbell steel and heavy plate loaders'
  },
  {
    id: 'gal-2',
    title: 'Luxurious Cardio Arena',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    tag: 'Premium treadmills equipped with continuous metric analytics and neon glows'
  },
  {
    id: 'gal-3',
    title: 'High-Energy Zumba Turf',
    category: 'Group Classes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    tag: 'Vibrant neon-infused training spaces designed for intense calorie incinerations'
  },
  {
    id: 'gal-4',
    title: 'Personal Training Zone',
    category: 'Personal Training',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    tag: 'Dedicated 1-on-1 performance analysis with specialized physical therapists'
  },
  {
    id: 'gal-5',
    title: 'CrossFit Power Cage Grid',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    tag: 'Multi-functional structural rigs for heavy Olympic barbell compound complexes'
  },
  {
    id: 'gal-6',
    title: 'Spa Recovery Sanctuary',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    tag: 'Luxurious heat sauna chambers ensuring deep muscle recovery'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Siddharth Sharma',
    role: 'Local Business Owner',
    rating: 5,
    transformation: 'Lost 18kg and built robust muscular definition in 4 months.',
    quote: '"Joining Always Fitness Gym Banswara was easily the best health choice of my life. The premium atmosphere, the neon aesthetic, and especially the customized nutrition plan entirely transformed not just my weight, but my daily stamina."',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    beforeImg: 'Before: Overweight & tired',
    afterImg: 'After: 12% Body Fat & Active'
  },
  {
    id: 't-2',
    name: 'Priyanka Patel',
    role: 'College Student',
    rating: 5,
    transformation: 'Drastically corrected posture & developed core lifting strength.',
    quote: '"The Zumba classes and HIIT setups are high-octane and incredibly engaging! The environment is extremely secure, friendly, and empowering for women. The professional trainers keep you motivated every second you are on the floor."',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    beforeImg: 'Before: Regular back aches',
    afterImg: 'After: High Strength & Athletic'
  },
  {
    id: 't-3',
    name: 'Rohan Meena',
    role: 'Software Engineer',
    rating: 5,
    transformation: 'Gained 8kg of clean athletic muscle index in an 18-week protocol.',
    quote: '"Being a programmer, my postures were terrible. The physical coaching squad here calibrated targeted compound movements for shoulder and spinal realignment. Their modern barbell equipment in Banswara is unmatched. Clean, luxurious, and top fitness tech."',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
    beforeImg: 'Before: Sedentary lifestyle',
    afterImg: 'After: Powerful build & stamina'
  }
];
