export interface CmsInformation
{
  image: string;
  title: string;
  content ?: string;
  id ?: number;
}

export const presentObject = {
  image: {type: 'file', required: true},
  title: {type: 'text', required: true},
  content: {type: 'text', required: false}
}
