-- CreateTable
CREATE TABLE "TaskToDo" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "taskName" TEXT NOT NULL,
    "taskCategory" TEXT NOT NULL,
    "taskDescription" TEXT,
    "checklist" BOOLEAN NOT NULL,

    CONSTRAINT "TaskToDo_pkey" PRIMARY KEY ("id")
);
