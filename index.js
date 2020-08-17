const { Alice, Reply, Markup } = require('yandex-dialogs-sdk')
const alice = new Alice();

const M = Markup;
alice.command('', async ctx => Reply.text('Привет, дружище!'));
alice.command('Запусти дискотеку', async ctx =>
  Reply.text('Дискотеки сегодня не будет, устроишь ее когда съедишь на новую квартиру'),
);
alice.command(
  ['Как на счет пиццы?', 'Скажи здоровую еду'],
  ctx => {
    return {
      text: `Самая здоровая еда это пицца`,
      buttons: [M.button('Купить пиццу'), M.button('Может быть еще?')],
    };
  },
);

alice.any(async ctx => Reply.text(`Я не понимаю, обратитесь к Антону за помощью`));
const server = alice.listen(3001, '/');