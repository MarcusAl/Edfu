# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

User.create({ email: 'emkay1993@gmail.com', password: 'pass1234', password_confirmation: 'pass1234' })

lang_array = %w[English Chinese Russian Spanish French]

30.times do
  Course.create([{
                  user_id: User.first.id,
                  title: Faker::Educator.course_name,
                  description: Faker::TvShows::MichaelScott.quote,
                  short_description: Faker::Quote.famous_last_words,
                  language: lang_array.sample,
                  level: 'Beginner',
                  price: Faker::Number.between(from: 15, to: 200)
                }])
end
