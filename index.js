//タスクの一覧配列
let task = ['掃除', '買い物', '散歩'];

//コンソールに表示
function print(len) {
  console.log(
    '===========================\n' +
      '現在持っているタスクの一覧\n' +
      '==========================='
  );
  for (let i = 0; i < len; i++) {
    console.log(i + ' : ' + task[i]);
  }
}

let text;

print(task.length);

text = prompt('タスクを入力してください');
task[task.length] = text;

print(task.length);

alert('新しいタスクを追加しました。');

prompt('「確認、追加、削除、終了」の4つのいずれかを追加してください。');
