import { z } from "zod";

const LocationSchema = z.object({
    address: z.string(),
    postalCode: z.string(),
    city: z.string(),
    countryCode: z.string(),
    region: z.string(),
});

const ProfileSchema = z.object({
    network: z.string(),
    username: z.string(),
    url: z.string(),
});

const BasicsSchema = z.object({
    name: z.string(),
    label: z.string(),
    image: z.string(),
    email: z.string(),
    phone: z.string(),
    url: z.string().nullable(),
    summary: z.string(),
    cvSummary: z.string(),
    location: LocationSchema,
    profiles: z.array(ProfileSchema),
});

export const WorkSchema = z.object({
    name: z.string(),
    position: z.string(),
    url: z.string().nullable(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    summary: z.string(),
    highlights: z.array(z.string()),
});

export const VolunteerSchema = z.object({
    organization: z.string(),
    position: z.string(),
    url: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
});

export const SkillSchema = z.object({
    name: z.string(),
    level: z.string(),
    keywords: z.array(z.string()),
});

const AwardSchema = z.object({
    title: z.string(),
    date: z.string(),
    awarder: z.string(),
    summary: z.string(),
});

const CertificateSchema = z.object({
    name: z.string(),
    date: z.string(),
    issuer: z.string(),
    url: z.string(),
});

const PublicationSchema = z.object({
    name: z.string(),
    publisher: z.string(),
    releaseDate: z.string(),
    url: z.string(),
    summary: z.string(),
});

const EducationSchema = z.object({
    institution: z.string(),
    url: z.string(),
    area: z.string(),
    studyType: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    score: z.string(),
    courses: z.array(z.string()),
});

const LanguageSchema = z.object({
    language: z.string(),
    fluency: z.string(),
});

export const ProjectSchema = z.object({
    name: z.string(),
    isActive: z.boolean(),
    description: z.string(),
    highlights: z.array(z.string()),
    url: z.string().nullable(),
    github: z.string().nullable().optional(),
    employer: z.string().nullable().optional(),
    image: z.string().optional(),
    imageMobile: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

const InterestSchema = z.object({
    name: z.string(),
    keywords: z.array(z.string()),
});

const ReferenceSchema = z.object({
    name: z.string(),
    reference: z.string(),
});

export const cvSchema = z.object({
    basics: BasicsSchema,
    work: z.array(WorkSchema),
    volunteer: z.array(VolunteerSchema).optional(),
    education: z.array(EducationSchema),
    awards: z.array(AwardSchema).optional(),
    certificates: z.array(CertificateSchema).optional(),
    publications: z.array(PublicationSchema).optional(),
    skills: z.array(SkillSchema),
    languages: z.array(LanguageSchema),
    interests: z.array(InterestSchema).optional(),
    references: z.array(ReferenceSchema).optional(),
    projects: z.array(ProjectSchema),
});

export type CV = z.infer<typeof cvSchema>;
export type Work = z.infer<typeof WorkSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
