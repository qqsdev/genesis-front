import { Injectable } from '@angular/core';

/**
 * Vaqtinchalik ma'lumotlar bilan ishlash uchun service.
 * Keyin buni o'rniga backend ulanadi.
 * Bu service ma'lumotlarni vaqtinchalik browseringizni o'zida saqlaydi.
 */
@Injectable({ providedIn: 'root' })
export class FakeDataService {
  /**
   * LocalStorage ichiga saqlab qo'yilgan ma'lumotlarni beradi
   * @param key saqlangan ma'lumot nomi
   * @param defaultItems agar saqlangan ma'lumot bo'lmasa, shu ma'lumotlarni saqlab, shuni o'zini qaytarib beradi
   * @returns vaqtinchali saqlangan ma'lumotlarni qaytaradi
   */
  public getList(key: string, defaultItems: any[] = []): any[] {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaultItems));
    }

    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  /**
   * LocalStorage ichiga ma'lumotlarni saqlab qo'yish
   * @param key ma'lumot nomi
   * @param items saqlab qo'yish kerak bo'lgan ma'lumot
   */
  public saveList(key: string, items: any[]) {
    localStorage.setItem(key, JSON.stringify(items));
  }
}
