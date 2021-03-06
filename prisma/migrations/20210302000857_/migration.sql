-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "label" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillSummary" (
    "label" TEXT NOT NULL,
    "summary" INTEGER NOT NULL,
    "userId" INTEGER,

    PRIMARY KEY ("label")
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD FOREIGN KEY ("label") REFERENCES "SkillSummary"("label") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillSummary" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
