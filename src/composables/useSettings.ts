import PrivacySettings from '@/components/PrivacySettings.vue'
import { ref, watch } from 'vue'

interface SettingsMap {
  general: GeneralSettings
  privacy: PrivacySettings
  notifications: NotificationSettings
}

type SettingsKey = keyof SettingsMap

interface GeneralSettings {
  username: string
  email: string
  about: string
  gender: string
  country: string
}

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const stored = localStorage.getItem(key)

  return stored !== null ? JSON.parse(stored) : defaults
}

const watcher =
  <T extends SettingsKey>(key: T) =>
  (value: SettingsMap[T]) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

const general = ref<GeneralSettings>(
  init('general', {
    username: '',
    email: '',
    about: '',
    gender: 'male',
    country: 'Slovakia',
  }),
)

watch(general, watcher('general'), { deep: true })

interface NotificationSettings {
  email: boolean
  sms: boolean
}

const notifications = ref<NotificationSettings>(
  init('notifications', {
    email: false,
    sms: false,
  }),
)

watch(notifications, watcher('notifications'), { deep: true })

interface PrivacySettings {
  visibility: Visibility
  searchEngineIndexing: boolean
}

type Visibility = 'public' | 'private'

const privacy = ref<PrivacySettings>(
  init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false,
  }),
)

watch(privacy, watcher('privacy'), { deep: true })

export function useSettings() {
  return {
    general,
    notifications,
    privacy,
  }
}
