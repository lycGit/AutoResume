export class SkillModel {
    name?: string;
    detail?: string
    items?: SkillItemModel[]
    displayItems: string[] = []
}

export class SkillItemModel {
    name?: string;
    level?: number;
    isSelect?: boolean;
}