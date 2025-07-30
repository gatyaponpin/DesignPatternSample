// フォーム構築のインターフェース
import type { Component } from 'vue'

export interface FormDirector {
  buildForm(): Component
}