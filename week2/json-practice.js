// ==============================================
// JSON操作の練習
// ==============================================

// --- 基本：JSONオブジェクトの作成 ---
const member = {
  name: '山田太郎',
  age: 22,
  skills: ['JavaScript', 'Python'],
  address: {
    city: '東京',
    ward: '渋谷'
  }
};

// プロパティにアクセス
console.log('--- 基本アクセス ---');
console.log('名前:', member.name);
console.log('年齢:', member.age);
console.log('最初のスキル:', member.skills[0]);
console.log('市:', member.address.city);

// --- 変換：JavaScriptオブジェクト ↔ JSON文字列 ---
console.log('\n--- 変換 ---');

// JavaScriptオブジェクト → JSON文字列
const jsonString = JSON.stringify(member, null, 2);
console.log('文字列に変換\n', jsonString);

// JSON文字列 → JavaScriptオブジェクト
const parsed = JSON.parse(jsonString);
console.log('オブジェクトに戻した:', parsed.name);

// --- 配列操作 ---
console.log('\n--- 配列操作 ---');

const members = [
  { name: '山田太郎', role: 'developer', score: 85 },
  { name: '鈴木花子', role: 'designer', score: 92 },
  { name: '佐藤次郎', role: 'developer', score: 78 },
  { name: '田中三郎', role: 'designer', score: 67 },
];

// filter: 条件に合うものだけ取り出す
const highScorers = members.filter(m => m.score >= 80);
console.log('80点以上:', highScorers.map(m => m.name));

// map: 各要素を別の形式に変換する
const names = members.map(m => m.name);
console.log('全員の名前:', names);

// find: 最初に条件に合った1件だけ取り出す
const taro = members.find(m => m.name === '山田太郎');
console.log('山田さんのデータ:', taro);