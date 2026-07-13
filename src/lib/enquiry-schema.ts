import { z } from "zod";

export const SERVICE_OPTIONS = [
  "DGPS Survey",
  "Drone Survey",
  "LiDAR Survey",
  "Topographical Survey",
  "Engineering Survey",
  "GIS Mapping",
  "Railway Survey",
  "Highway Survey",
  "Mining Survey",
  "Solar Power Survey",
  "Irrigation & River Survey",
  "Transmission Line Survey",
  "Land Acquisition Survey",
  "Utility Mapping",
  "Construction Survey",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number] | "";

export const EnquirySchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name is too long")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email address is too long")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s\-()]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .optional()
    .or(z.literal("")),
  projectLocation: z
    .string()
    .max(200, "Location is too long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please describe your project requirements (at least 10 characters)")
    .max(2000, "Message is too long (max 2000 characters)")
    .trim(),
});

export type EnquiryData = z.infer<typeof EnquirySchema>;

export type EnquiryResponse =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };
