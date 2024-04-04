export interface UserDefineOptions {
  offset?: { top?: number; bottom?: number }
  side?: 'top' | 'bottom' | 'both'
  zIndex?: number
  onStick?: () => void
}
