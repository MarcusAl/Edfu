# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

User.create({ email: 'admin@example.com', password: 'pass1234', password_confirmation: 'pass1234' })

30.times do
  Course.create([{
                  title: Faker::Educator.course_name,
                  description: Faker::TvShows::MichaelScott.quote,
                  user_id: User.first.id
                }])
end
