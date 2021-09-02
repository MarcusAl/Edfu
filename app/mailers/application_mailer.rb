class ApplicationMailer < ActionMailer::Base
  default from: 'support@edfu.herokuapp.com'
  layout 'mailer'
end
