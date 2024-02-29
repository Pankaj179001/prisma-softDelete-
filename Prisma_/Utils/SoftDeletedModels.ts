import { Prisma } from '@prisma/client';
import { ModelConfig } from 'prisma-extension-soft-delete';

export const SoftDeletedModels: Partial<
  Record<Prisma.ModelName, boolean | ModelConfig>
> = {
  LeadSources: true,
  EventStore: true,
  LeadStages: true,
  ActivityEvent: true,
  Leads: true,
};
