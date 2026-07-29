CREATE TABLE `appointments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(30) NOT NULL,
	`treatmentType` enum('consultation','panchakarma','fertility','chronic_disease','digestive','respiratory','skin','mental_health','rejuvenation','other') NOT NULL DEFAULT 'consultation',
	`appointmentDate` date NOT NULL,
	`timeSlot` varchar(20) NOT NULL,
	`notes` text,
	`status` enum('pending','confirmed','cancelled','completed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `appointments_id` PRIMARY KEY(`id`)
);
