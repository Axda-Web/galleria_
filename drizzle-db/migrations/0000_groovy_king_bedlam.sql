CREATE TABLE `paintings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`artist` text NOT NULL,
	`description` text NOT NULL,
	`year` integer NOT NULL,
	`image` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
