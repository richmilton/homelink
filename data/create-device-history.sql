drop table if exists device_history;
create table device_history ("id" integer PRIMARY KEY,"productUid" text,"status" text,"updateTime" integer,"action" text);
