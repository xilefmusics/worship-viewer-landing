export interface TutorialSection {
  id: string;
  title: string;
  order: number;
  content: TutorialContentItem[];
}

export interface TutorialContentItem {
  type: "paragraph" | "heading" | "notes" | "guitarTab";
  text: string;
  notes?: string[]; // For notes type, contains the scale notes
  chordName?: string; // For guitarTab type, the name of the chord
  positions?: Array<{ str: number; fret: number }>; // For guitarTab type, the tab positions
  fingers?: number[]; // For guitarTab type, finger numbers (1=index, 2=middle, 3=ring, 4=pinky, 0=open)
}

export interface Tutorial {
  slug: string;
  title: string;
  description: string;
  estimatedTime: string;
  sections: TutorialSection[];
}

export const tutorials: Tutorial[] = [
  {
    slug: "getting-started",
    title: "Getting Started with Worship Viewer",
    description:
      "Welcome to Worship Viewer! This comprehensive guide will help you get up and running quickly, from creating your account to understanding the interface and basic features.",
    estimatedTime: "15 min read",
    sections: [
      {
        id: "creating-account",
        title: "Creating Your Account",
        order: 1,
        content: [
          {
            type: "paragraph",
            text: "Worship Viewer is designed to help worship teams focus on what matters most—leading people into God's presence. Before diving into features, let's cover the basics.",
          },
          {
            type: "paragraph",
            text: "Start by creating a free account at app.worshipviewer.com. Once you're logged in, you'll see your dashboard where you can manage songs, sets, and team members.",
          },
          {
            type: "paragraph",
            text: "The registration process is simple and takes just a few minutes. You'll need to provide a valid email address and create a secure password. After confirming your email, you'll have full access to all features.",
          },
        ],
      },
      {
        id: "understanding-interface",
        title: "Understanding the Interface",
        order: 2,
        content: [
          {
            type: "paragraph",
            text: "The main interface is divided into several key areas: the song library, the planning timeline, and the live view. Each serves a specific purpose in your worship planning workflow.",
          },
          {
            type: "paragraph",
            text: "Take some time to explore these areas and familiarize yourself with the layout. You can always customize the view to match your team's preferences.",
          },
        ],
      },
      {
        id: "creating-songs",
        title: "Creating Your First Song",
        order: 3,
        content: [
          {
            type: "paragraph",
            text: "Songs are the foundation of Worship Viewer. You can import songs from various formats or create them from scratch.",
          },
          {
            type: "heading",
            text: "Importing from ChordPro",
          },
          {
            type: "paragraph",
            text: "If you have songs in ChordPro format, simply click the 'Import' button and select your file. Worship Viewer will automatically parse the chords and lyrics, preserving the original formatting.",
          },
          {
            type: "heading",
            text: "Importing from Ultimate Guitar",
          },
          {
            type: "paragraph",
            text: "You can also import tabs and chord charts directly from Ultimate Guitar. Copy the URL or paste the content, and Worship Viewer will convert it to the proper format.",
          },
          {
            type: "heading",
            text: "Creating from Scratch",
          },
          {
            type: "paragraph",
            text: "To create a new song manually, click 'New Song' and fill in the details. Add verses, choruses, and bridges as separate sections. You can format chords inline with lyrics for easy reading.",
          },
          {
            type: "paragraph",
            text: "Remember to save your work frequently, and don't forget to add metadata like key, tempo, and tags for easier searching later.",
          },
        ],
      },
      {
        id: "managing-charts",
        title: "Managing Charts and Keys",
        order: 4,
        content: [
          {
            type: "paragraph",
            text: "One of Worship Viewer's powerful features is automatic key transposition. This allows every team member to see charts in their preferred key without creating multiple versions.",
          },
          {
            type: "heading",
            text: "Transposing Songs",
          },
          {
            type: "paragraph",
            text: "When viewing a song, you'll see a key selector at the top. Simply choose the desired key, and the entire chart updates instantly. All chords are automatically transposed, maintaining the correct relationships.",
          },
          {
            type: "heading",
            text: "Multiple Chart Versions",
          },
          {
            type: "paragraph",
            text: "Sometimes you need different arrangements of the same song—perhaps a simplified version for acoustic sets or an extended version with additional bridges. Worship Viewer lets you create and manage multiple chart versions.",
          },
          {
            type: "paragraph",
            text: "Each version can have its own sections, chord progressions, and even different lyrics. This flexibility ensures you're always prepared for any worship context.",
          },
        ],
      },
      {
        id: "planning-sets",
        title: "Planning Worship Sets",
        order: 5,
        content: [
          {
            type: "paragraph",
            text: "The planning timeline is where your worship sets come to life. Drag and drop songs to build your setlist, and Worship Viewer will help you visualize the flow of your service.",
          },
          {
            type: "heading",
            text: "Building a Setlist",
          },
          {
            type: "paragraph",
            text: "Start by creating a new set. Then, simply drag songs from your library into the timeline. You can reorder them by dragging, and add notes or cues between songs for smooth transitions.",
          },
          {
            type: "heading",
            text: "Timing and Flow",
          },
          {
            type: "paragraph",
            text: "Consider the flow of your set—how songs connect thematically and musically. Worship Viewer shows you the total estimated time, helping you stay within your service window.",
          },
          {
            type: "heading",
            text: "Spontaneous Worship",
          },
          {
            type: "paragraph",
            text: "While planning is important, Worship Viewer also supports spontaneous worship. You can quickly add songs on the fly, or even launch a fully unplanned set if the Spirit leads. The interface stays organized even when you break from the plan.",
          },
        ],
      },
      {
        id: "team-collaboration",
        title: "Team Collaboration",
        order: 6,
        content: [
          {
            type: "paragraph",
            text: "Worship is a team effort, and Worship Viewer makes collaboration seamless. Share songs, sets, and resources with your entire team.",
          },
          {
            type: "heading",
            text: "Inviting Team Members",
          },
          {
            type: "paragraph",
            text: "Go to your team settings and click 'Invite Members'. Send invitations via email, and team members will receive access to your shared library and sets.",
          },
          {
            type: "heading",
            text: "Shared Libraries",
          },
          {
            type: "paragraph",
            text: "When team members add or edit songs, changes sync automatically across all devices. Everyone always has access to the latest version of every song.",
          },
          {
            type: "heading",
            text: "Role-Based Permissions",
          },
          {
            type: "paragraph",
            text: "Assign roles to team members—worship leaders can create sets, musicians can view charts, and administrators can manage the entire library. This ensures the right people have the right access.",
          },
        ],
      },
      {
        id: "tips-tricks",
        title: "Tips & Best Practices",
        order: 7,
        content: [
          {
            type: "paragraph",
            text: "Here are some tips from experienced Worship Viewer users to help you maximize your worship planning efficiency.",
          },
          {
            type: "heading",
            text: "Organize with Tags",
          },
          {
            type: "paragraph",
            text: "Use tags liberally to organize your song library. Tag songs by theme (praise, worship, communion), season (Advent, Easter), or style (upbeat, contemplative). This makes finding the right song for any moment much easier.",
          },
          {
            type: "heading",
            text: "Prepare Multiple Sets",
          },
          {
            type: "paragraph",
            text: "Create set templates for different service types—Sunday morning, evening service, youth group, etc. You can duplicate and modify these templates, saving hours of planning time.",
          },
          {
            type: "heading",
            text: "Use Notes and Cues",
          },
          {
            type: "paragraph",
            text: "Add notes between songs for transitions, key changes, or special instructions. These notes appear in the live view, helping your team stay synchronized.",
          },
          {
            type: "heading",
            text: "Keep It Simple",
          },
          {
            type: "paragraph",
            text: "Remember, the goal is to worship, not to manage technology. Don't over-plan—leave room for the Holy Spirit to move. Worship Viewer is a tool to serve your worship, not replace it.",
          },
        ],
      },
    ],
  },
  {
    slug: "music-theory",
    title: "Music Theory for Worship Leaders",
    description:
      "Deep dive into music theory concepts essential for worship leaders: chord progressions, key relationships, transposition, and how to apply theory to enhance your worship leading.",
    estimatedTime: "20 min read",
    sections: [
      {
        id: "chord-basics",
        title: "Understanding Chords",
        order: 1,
        content: [
          {
            type: "paragraph",
            text: "Understanding music theory can greatly enhance your worship leading. While you don't need to be a music theory expert, grasping the fundamentals will help you communicate better with your team and make more informed musical decisions.",
          },
          {
            type: "paragraph",
            text: "Chords are the building blocks of harmony in worship music. A chord is simply three or more notes played together. The most common chords in worship music are triads—three-note chords built from the notes of a scale.",
          },
          {
            type: "paragraph",
            text: "In any key, you have seven basic chords (one for each note of the scale). These are typically labeled with Roman numerals: I, ii, iii, IV, V, vi, and vii°. The uppercase numerals represent major chords, lowercase represent minor chords, and the ° symbol indicates a diminished chord.",
          },
        ],
      },
      {
        id: "c-major-scale",
        title: "The C-Major Scale",
        order: 2,
        content: [
          {
            type: "paragraph",
            text: "The C-Major scale is the foundation of Western music theory. It consists of eight notes, starting and ending on C, with no sharps or flats. Understanding this scale is crucial because it serves as a reference point for all other scales and keys.",
          },
          {
            type: "heading",
            text: "The Notes of C-Major",
          },
          {
            type: "paragraph",
            text: "The C-Major scale follows the pattern of whole steps and half steps: Whole-Whole-Half-Whole-Whole-Whole-Half (W-W-H-W-W-W-H). This pattern creates the familiar sound of a major scale.",
          },
          {
            type: "notes",
            text: "C-Major Scale",
            notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
          },
          {
            type: "paragraph",
            text: "Each note in the scale has a specific function. The first note (C) is called the tonic—it's the 'home' note that the scale resolves to. The fifth note (G) is the dominant, which creates tension that wants to resolve back to the tonic. The fourth note (F) is the subdominant, often used in chord progressions.",
          },
          {
            type: "heading",
            text: "Why C-Major Matters",
          },
          {
            type: "paragraph",
            text: "C-Major is often the first scale musicians learn because it uses only the white keys on a piano. This makes it visually and conceptually easier to understand. Once you grasp C-Major, you can apply the same whole-step/half-step pattern to any starting note to create other major scales.",
          },
          {
            type: "paragraph",
            text: "In worship music, many songs are written in C-Major or closely related keys. Understanding this scale helps you recognize chord progressions, transpose songs, and communicate more effectively with your team.",
          },
        ],
      },
      {
        id: "g-major-scale",
        title: "The G-Major Scale",
        order: 3,
        content: [
          {
            type: "paragraph",
            text: "G-Major is one of the most popular keys in worship music, especially for guitarists. It's a bright, uplifting key that works beautifully for praise songs and anthems. Understanding G-Major is essential for any worship guitarist.",
          },
          {
            type: "heading",
            text: "The Notes of G-Major",
          },
          {
            type: "paragraph",
            text: "The G-Major scale follows the same whole-step/half-step pattern as all major scales (W-W-H-W-W-W-H), but starting on G. This means it has one sharp: F#. The scale consists of G, A, B, C, D, E, and F#.",
          },
          {
            type: "notes",
            text: "G-Major Scale",
            notes: ["G", "A", "B", "C", "D", "E", "F#", "G"],
          },
          {
            type: "paragraph",
            text: "G-Major is particularly guitar-friendly because many of its chords use open strings, making them easier to play and creating a resonant, full sound. This is why so many worship songs are written in G-Major.",
          },
          {
            type: "heading",
            text: "Common G-Major Chords on Guitar",
          },
          {
            type: "paragraph",
            text: "The most common chords in G-Major are G (I), Am (ii), Bm (iii), C (IV), D (V), Em (vi), and F#dim (vii°). Here are the most frequently used open chord shapes for G-Major and its related chords:",
          },
          {
            type: "guitarTab",
            text: "",
            chordName: "G Major (I)",
            positions: [
              { str: 6, fret: 3 },
              { str: 5, fret: 2 },
              { str: 4, fret: 0 },
              { str: 3, fret: 0 },
              { str: 2, fret: 0 },
              { str: 1, fret: 3 },
            ],
            fingers: [3, 2, 0, 0, 0, 3], // Ring, middle, open, open, open, ring
          },
          {
            type: "paragraph",
            text: "The G major chord is the tonic chord—the 'home' chord of the key. It's one of the first chords guitarists learn and is used extensively in worship music.",
          },
          {
            type: "guitarTab",
            text: "",
            chordName: "C Major (IV)",
            positions: [
              { str: 5, fret: 3 },
              { str: 4, fret: 2 },
              { str: 3, fret: 0 },
              { str: 2, fret: 1 },
              { str: 1, fret: 0 },
            ],
            fingers: [3, 2, 0, 1, 0], // Ring, middle, open, index, open
          },
          {
            type: "paragraph",
            text: "C major is the subdominant chord in G-Major. It's often used in progressions like G-C-D-G, creating a sense of movement away from and back to the tonic.",
          },
          {
            type: "guitarTab",
            text: "",
            chordName: "D Major (V)",
            positions: [
              { str: 4, fret: 0 },
              { str: 3, fret: 2 },
              { str: 2, fret: 3 },
              { str: 1, fret: 2 },
            ],
            fingers: [0, 1, 3, 2], // Open, index, ring, middle
          },
          {
            type: "paragraph",
            text: "D major is the dominant chord in G-Major. It creates tension that strongly resolves back to G, making the G-D progression one of the most powerful in music.",
          },
          {
            type: "guitarTab",
            text: "",
            chordName: "E Minor (vi)",
            positions: [
              { str: 6, fret: 0 },
              { str: 5, fret: 2 },
              { str: 4, fret: 2 },
              { str: 3, fret: 0 },
              { str: 2, fret: 0 },
              { str: 1, fret: 0 },
            ],
            fingers: [0, 2, 2, 0, 0, 0], // Open, middle, middle, open, open, open
          },
          {
            type: "paragraph",
            text: "E minor is the relative minor of G-Major and is used frequently in worship progressions. The G-Em-C-D progression is extremely common in modern worship music.",
          },
          {
            type: "guitarTab",
            text: "",
            chordName: "A Minor (ii)",
            positions: [
              { str: 5, fret: 0 },
              { str: 4, fret: 2 },
              { str: 3, fret: 2 },
              { str: 2, fret: 1 },
              { str: 1, fret: 0 },
            ],
            fingers: [0, 2, 2, 1, 0], // Open, middle, middle, index, open
          },
          {
            type: "paragraph",
            text: "A minor is another common chord in G-Major progressions. It adds emotional depth and is often used in verses or quieter sections of songs.",
          },
          {
            type: "heading",
            text: "Why G-Major is Popular in Worship",
          },
          {
            type: "paragraph",
            text: "G-Major is particularly well-suited for worship music because it sits comfortably in the vocal range of most singers, and its open chords on guitar create a full, resonant sound that fills a room. Many of the most beloved worship songs are written in G-Major or closely related keys.",
          },
          {
            type: "paragraph",
            text: "The G-C-D progression (I-IV-V) is one of the most fundamental progressions in music and appears in countless worship songs. Understanding these chord shapes and their relationships will help you play and transpose worship songs more effectively.",
          },
        ],
      },
      {
        id: "chord-progressions",
        title: "Common Chord Progressions",
        order: 4,
        content: [
          {
            type: "paragraph",
            text: "Worship music often uses familiar chord progressions that create emotional resonance. The most common progression in modern worship is the I-V-vi-IV progression (in the key of C, that's C-G-Am-F).",
          },
          {
            type: "paragraph",
            text: "Other popular progressions include vi-IV-I-V (the 'sensitive female' progression), I-vi-IV-V (classic doo-wop), and I-V-vi-iii-IV-I-IV-V (the 'pop punk' progression). Understanding these patterns helps you recognize songs quickly and transpose them more easily.",
          },
        ],
      },
      {
        id: "key-relationships",
        title: "Key Relationships and Modulation",
        order: 5,
        content: [
          {
            type: "paragraph",
            text: "Keys that share many common notes are closely related. For example, C major and A minor share all the same notes (they're relative keys). Moving between closely related keys feels natural and smooth.",
          },
          {
            type: "paragraph",
            text: "Modulation—changing keys within a song—is a powerful tool in worship. Many worship songs modulate up a half-step or whole step for the final chorus to create an emotional lift. Understanding key relationships helps you plan these modulations effectively.",
          },
        ],
      },
      {
        id: "transposition-theory",
        title: "Transposition Theory",
        order: 6,
        content: [
          {
            type: "paragraph",
            text: "Transposition is moving a song from one key to another while maintaining the same relationships between notes. When you transpose, every note moves by the same interval.",
          },
          {
            type: "paragraph",
            text: "For example, if you transpose from C to D, every note moves up a whole step. C becomes D, D becomes E, E becomes F#, and so on. The chord progression I-V-vi-IV in C (C-G-Am-F) becomes I-V-vi-IV in D (D-A-Bm-G).",
          },
          {
            type: "paragraph",
            text: "Worship Viewer handles transposition automatically, but understanding the theory helps you make better decisions about which keys work best for your vocalists and instrumentalists.",
          },
        ],
      },
      {
        id: "applying-theory",
        title: "Applying Theory in Worship",
        order: 7,
        content: [
          {
            type: "paragraph",
            text: "Music theory isn't just academic knowledge—it's practical. Use your understanding of chord progressions to create smooth transitions between songs. Plan key modulations to build energy at the right moments.",
          },
          {
            type: "paragraph",
            text: "Understanding intervals helps you communicate with your team. Instead of saying 'play that note higher,' you can say 'move up a perfect fourth,' which is much more precise.",
          },
          {
            type: "paragraph",
            text: "Remember, theory serves the music, not the other way around. The goal is always to lead people into God's presence. Use theory as a tool to enhance your worship, but don't let it become a distraction from the heart of worship.",
          },
        ],
      },
    ],
  },
];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}

export function getAllTutorialSlugs(): string[] {
  return tutorials.map((tutorial) => tutorial.slug);
}

