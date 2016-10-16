import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, client) => {
  assert.equal(null, err);

  let contestCount = 0;
  client.db('test').collection('contests').find({}).each((err, contest) => {
    assert.equal(null, err);
    if (!contest) { return; }

    contestCount++;
    client.db('test').collection('names')
      .find({ id: { $in: contest.nameIds }})
      .project({ _id: 1 })
      .toArray()
      .then(_ids => {
        const newIds = _ids.map(o => o._id);
        client.db('test').collection('contests').updateOne(
          { id: contest.id },
          { $set: { nameIds: newIds } }
        ).then(() => {
          console.info('Updated', contest._id);
          contestCount--;
          if (contestCount === 0) { client.close(); }
        });
      })
      .catch(console.error);
  });

});
