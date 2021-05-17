-- CreateTable
CREATE TABLE "QuestionCategory" (
    "uuid" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Question" (
    "uuid" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "questionCategoryUuid" TEXT,

    PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "Question" ADD FOREIGN KEY ("questionCategoryUuid") REFERENCES "QuestionCategory"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
