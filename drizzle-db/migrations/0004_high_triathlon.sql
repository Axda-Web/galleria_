PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_images` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`paintingId` integer,
	`type` text NOT NULL,
	`url` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`paintingId`) REFERENCES `paintings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_images`("id", "paintingId", "type", "url", "created_at", "updated_at") SELECT "id", "paintingId", "type", "url", "created_at", "updated_at" FROM `images`;--> statement-breakpoint
DROP TABLE `images`;--> statement-breakpoint
ALTER TABLE `__new_images` RENAME TO `images`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_paintings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`artist` text NOT NULL,
	`description` text NOT NULL,
	`year` integer NOT NULL,
	`sourceUrl` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_paintings`("id", "name", "artist", "description", "year", "sourceUrl", "created_at", "updated_at") SELECT "id", "name", "artist", "description", "year", "sourceUrl", "created_at", "updated_at" FROM `paintings`;--> statement-breakpoint
DROP TABLE `paintings`;--> statement-breakpoint
ALTER TABLE `__new_paintings` RENAME TO `paintings`;