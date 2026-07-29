CREATE TABLE `blocked_dates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`blockedDate` date NOT NULL,
	`reason` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `blocked_dates_id` PRIMARY KEY(`id`),
	CONSTRAINT `blocked_dates_blockedDate_unique` UNIQUE(`blockedDate`)
);
