CREATE TABLE `referrals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`referrerId` int NOT NULL,
	`referralCode` varchar(20) NOT NULL,
	`referredAppointmentId` int,
	`rewardClaimed` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `referrals_id` PRIMARY KEY(`id`),
	CONSTRAINT `referrals_referralCode_unique` UNIQUE(`referralCode`)
);
--> statement-breakpoint
ALTER TABLE `appointments` ADD `userId` int;--> statement-breakpoint
ALTER TABLE `appointments` ADD `referralCode` varchar(20);--> statement-breakpoint
ALTER TABLE `appointments` ADD `discountApplied` boolean DEFAULT false NOT NULL;