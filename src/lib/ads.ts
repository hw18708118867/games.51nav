import { ADSENSE_CONFIG } from './constants';

export function getAdClientId(): string {
  return ADSENSE_CONFIG.clientId;
}

export function getAdSlot(slot: keyof typeof ADSENSE_CONFIG.slots): string {
  return ADSENSE_CONFIG.slots[slot];
}

export function isAdEnabled(): boolean {
  return ADSENSE_CONFIG.enabled;
}

export function getAdConfig() {
  return {
    ...ADSENSE_CONFIG,
    isDev: import.meta.env?.DEV ?? false,
    isProd: import.meta.env?.PROD ?? false,
  };
}