(function() {
  describe('Notification ::', function() {
    it('add new notification', function() {
      var notification;
      notification = {
        name: 'sample',
        title: 'Test',
        body: 'This is a sample notification'
      };
      parrot.notification.add(notification);
      return parrot.notification.sample().body.should.eql('This is a sample notification');
    });
    it('show the notification that is already added', function() {
      parrot.notification.show('sample', {
        body: 'yarl!'
      });
      return parrot.notification.sample().body.should.eql('yarl!');
    });
    return it('show a notification that is not stored', function() {
      var notification;
      notification = parrot.notification.show({
        title: 'Test',
        body: 'another sample notification!'
      });
      return notification.body.should.eql('another sample notification!');
    });
  });

}).call(this);
