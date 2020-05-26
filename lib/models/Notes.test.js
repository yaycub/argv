const Note = require('./Notes');

describe('Notes Model', () => {
  it('it requires text', ()=> {
    const note = new Note();
    const { errors } = note.validateSync();

    expect(errors.text.message).toEqual('Path `text` is required.');
  });

  it('has a timestamp', () => {
    const note = Note({ text: 'My cool Note' });

    expect(note).toMatchObject({
      _id: note._id,
      text: note.text,
      timestamp: note.timestamp
    });
  });
});
