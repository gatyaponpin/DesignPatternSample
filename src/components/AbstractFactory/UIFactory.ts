// 抽象ファクトリー定義
import type { Component } from 'vue'

export const themeTypes = ['light', 'dark'] as const
export type ThemeType = typeof themeTypes[number]

export interface UIFactory {
  createButton(): Component
  createAlert(): Component
}