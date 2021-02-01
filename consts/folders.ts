export const FOLDERVALS = ["Projects", "OSS", "Ironhack"] as const;

type TFolders<T extends typeof FOLDERVALS> = T[number];

export type TFolderVals = TFolders<typeof FOLDERVALS>;
